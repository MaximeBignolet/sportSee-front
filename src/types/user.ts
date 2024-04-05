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
        firstName: number;
        lastName: number;
    };
};

export type UserActivity = {
    sessions: [
        {
            calories: number;
            day: string;
            kilogram: number;
        }
    ];
    userId: number;
};

export type UserAverageSession = {
    userId: number,
    sessions: [
        {
            day: number;
            sessionLength: string;
        }
    ];
}

export type UserPerformance = {
    data: {
        "userId": number,
        "kind": object,
    },
    kind: [
        value: number,
        kind:number
    ]
}