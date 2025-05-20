export interface FileItem {
    name: string;
    subitems?: FileItem[];
};

export const rawData: FileItem[] = [
    {
        name: "DiseaseAtlas",
        subitems: [
            {
                name: "components",
                subitems: [
                    {
                        name: "DiseaseAtlasAssociatedPopup.js"
                    },
                    {
                        name: "DiseaseAtlasTreeFolder.js"
                    },
                ]
            },
            {
                name: "store",
                subitems: [
                    {
                        name: "reducer.js"
                    },
                    {
                        name: "saga.js"
                    },
                    {
                        name: "selectors.js"
                    },
                ]
            },
            {
                name: "DiseaseAtlasPage.js"
            },
            {
                name: "DiseaseAtlasPage.css"
            },
            {
                name: "Utils.js"
            },
        ]
    },
    {
        name: "FindRelated",
    },
]
