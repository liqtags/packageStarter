declare const returnPackage: () => {
    name: string;
    version: string;
    private: boolean;
    files: string[];
    devDependencies: {
        "@vercel/style-guide": string;
        "eslint-config-turbo": string;
        "eslint-config-prettier": string;
        "eslint-plugin-only-warn": string;
        "@typescript-eslint/parser": string;
        "@typescript-eslint/eslint-plugin": string;
        typescript: string;
    };
};
declare const add: (a: number, b: number) => number;
declare function useCommander(): Promise<void>;

export { add, returnPackage, useCommander };
