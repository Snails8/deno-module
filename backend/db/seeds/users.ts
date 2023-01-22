import { AbstractSeed, Info, ClientPostgreSQL } from "https://deno.land/x/nessie@2.0.10/mod.ts";

export default class extends AbstractSeed<ClientPostgreSQL> {
    /** Runs on seed */
    async run(info: Info): Promise<void> {
        await this.client.queryArray(
            `copy users from 'db/seeds/tsv/users.tsv' with CSV DELIMITER E'\t' HEADER;
            `
        )
    }
}
