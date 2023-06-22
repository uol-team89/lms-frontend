import { ICrudPageProps } from "../components/CrudViewPage"

const allowedEntityTypes = ["teachers", "students"]

type ResolverMap = Partial<{[key in typeof allowedEntityTypes[number]] : ICrudPageProps}>

const createDisplayTextAttributes = (entitySingularName: string, entityPluralName: string): Pick<ICrudPageProps, "listTitle" | "createButtonText" |"entitySingularName" |"entityPluralName"> => {
    return {
        // return back the args cuz I am too lazy to populate those fields in the dictionary below.
        entitySingularName: entitySingularName,
        entityPluralName: entityPluralName,
        listTitle: `List of ${entityPluralName}`,
        createButtonText: `Add a new ${entitySingularName}`
    }
}

const resolveEntityType = (entityType: string): ICrudPageProps | undefined => {
    const map: ResolverMap = {
        "teachers": {
            ...createDisplayTextAttributes("teacher", "teachers"),
            entityArray: [],
            dataGridColumnDefs: [],
       },

    }
    return map[entityType]
}