import { DefaultNamingStrategy, NamingStrategyInterface } from "typeorm";
import { snakeCase } from "typeorm/util/StringUtils";

export class NamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
    tableName(targetName: string, userSpecifiedName: string | undefined) {
        targetName = targetName.replace('Entity', '');

        if (userSpecifiedName) {
            targetName = userSpecifiedName;
        }

        return NamingStrategy.underscore(targetName);
    }

    columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
        return NamingStrategy.underscore(customName ? customName : propertyName);
    }

    private static underscore(text: string): string {
        return snakeCase(text).toUpperCase();
    }
}