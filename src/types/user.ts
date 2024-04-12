export type User = {
  id: number;
  keyData: {
    calorieCount: number;
    carbohydrateCount: number;
    lipidCount: number;
    proteinCount: number;
  };
  score: number;
  userInfos: {
    age: number;
    firstName: string;
    lastName: string;
  };
};

export type SessionsUserActivity = {
  calories: number;
  day: string;
  kilogram: number;
};

export type UserActivity = {
  sessions: SessionsUserActivity[];
  userId: number;
};

export type AverageUserSessionArray = {
  day: number;
  sessionLength: string;
};

export type UserAverageSession = {
  userId: number;
  sessions: AverageUserSessionArray[];
};

export type UserPerformance = {
  data: {
    userId: number;
    kind: object;
  };
  kind: [value: number, kind: number];
};
