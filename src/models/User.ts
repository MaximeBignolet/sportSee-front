import { format } from "date-fns";

export class User {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  score?: number;
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;

  constructor(params: {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
    calorieCount: number;
    proteinCount: number;
    carbohydrateCount: number;
    lipidCount: number;
    score?: number;
  }) {
    this.id = params.id;
    this.firstname = params.firstname;
    this.lastname = params.lastname;
    this.age = params.age;
    this.score = params.score;
    this.proteinCount = params.proteinCount;
    this.calorieCount = params.calorieCount;
    this.carbohydrateCount = params.carbohydrateCount;
    this.lipidCount = params.lipidCount;
  }

  static userFromJson(json: Record<string, any>): User {
    return new User({
      id: json.id,
      proteinCount: json.keyData.proteinCount,
      carbohydrateCount: json.keyData.carbohydrateCount,
      lipidCount: json.keyData.lipidCount,
      calorieCount: json.keyData.calorieCount,
      firstname: json.userInfos.firstName,
      lastname: json.userInfos.lastName,
      age: json.userInfos.age,
      score: json.score ?? json.todayScore,
    });
  }

  caloriesToLocales(locale: Intl.LocalesArgument) {
    return this.calorieCount.toLocaleString(locale);
  }

  get userScorePercentage() {
    if (this.score) {
      return this.score * 100;
    }
  }
  get userRemainPercentage() {
    if (this.score) {
      return 100 - this.score * 100;
    }
  }
}

export class UserActivity {
  userId: number;
  sessions: {
    day: string;
    kilogram: number;
    calories: number;
  }[];

  constructor(params: {
    userId: number;
    sessions: {
      day: string;
      kilogram: number;
      calories: number;
    }[];
  }) {
    this.userId = params.userId;
    this.sessions = params.sessions;
  }

  static userActivityFromJson(json: Record<string, any>): UserActivity {
    if (!json.sessions || !Array.isArray(json.sessions)) {
      console.error("Invalid or missing sessions data", json);
      return new UserActivity({ userId: json.userId, sessions: [] });
    }

    return new UserActivity({
      userId: json.userId,
      sessions: json.sessions.map((session: any) => ({
        day: format(new Date(session.day), "d"),
        kilogram: session.kilogram,
        calories: session.calories,
      })),
    });
  }
}

export class UserAverageSessions {
  userId: number;
  sessions: {
    day: string;
    sessionLength: number;
  }[];

  constructor(params: {
    userId: number;
    sessions: {
      day: string;
      sessionLength: number;
    }[];
  }) {
    this.userId = params.userId;
    this.sessions = params.sessions;
  }

  static userAverageSessionsFromJson(
    json: Record<string, any>
  ): UserAverageSessions {
    const daysMap = ["L", "M", "M", "J", "V", "S", "D"];

    if (!json.sessions || !Array.isArray(json.sessions)) {
      console.error("Invalid or missing sessions data", json);
      return new UserAverageSessions({ userId: json.userId, sessions: [] });
    }
    return new UserAverageSessions({
      userId: json.userId,
      sessions: json.sessions.map((session: any) => ({
        day: daysMap[session.day - 1],
        sessionLength: session.sessionLength,
      })),
    });
  }
}

export class UserPerfomance {
  userId: number;
  kind: {
    [key: number]: string;
  };
  data: Array<{ value: number; kind: number; kindDescription: string }>;

  static kindTranslations: { [key: string]: string } = {
    intensity: "intensité",
    speed: "vitesse",
    strength: "force",
    endurance: "endurance",
    energy: "énergie",
    cardio: "cardio",
  };

  constructor(params: {
    userId: number;
    kind: { [key: number]: string };
    data: Array<{ value: number; kind: number; kindDescription: string }>;
  }) {
    this.userId = params.userId;
    this.kind = params.kind;
    this.data = params.data
      .map((d) => ({
        ...d,
        kindDescription: UserPerfomance.kindTranslations[this.kind[d.kind]],
      }))
      .sort((a, b) => {
        const order = Object.keys(UserPerfomance.kindTranslations);
        return (
          order.indexOf(this.kind[a.kind]) - order.indexOf(this.kind[b.kind])
        );
      });
  }

  static userPerfomanceFromJson(json: Record<string, any>): UserPerfomance {
    const kindOrder = Object.keys(UserPerfomance.kindTranslations);
    const sortedData = json.data.sort((a: any, b: any) => {
      return (
        kindOrder.indexOf(json.kind[a.kind].toLowerCase()) -
        kindOrder.indexOf(json.kind[b.kind].toLowerCase())
      );
    });

    const transformedData = sortedData.map((item: any) => ({
      value: item.value,
      kind: item.kind,
      kindDescription: UserPerfomance.kindTranslations[json.kind[item.kind]],
    }));

    return new UserPerfomance({
      userId: json.userID,
      kind: json.kind,
      data: transformedData,
    });
  }
}
