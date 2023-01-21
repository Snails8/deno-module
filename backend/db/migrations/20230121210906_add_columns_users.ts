import { AbstractMigration, Info, ClientPostgreSQL } from "https://deno.land/x/nessie@2.0.10/mod.ts";

export default class extends AbstractMigration<ClientPostgreSQL> {
    /** Runs on migrate */
    async up(info: Info): Promise<void> {
        await this.client.queryArray(
            `ALTER TABLE users
                ADD email varchar(252) NOT NULL,  
                ADD age int DEFAULT 0 NOT NULL, 
                ADD created_at timestamp with time zone DEFAULT now() NOT NULL, 
                ADD updated_at timestamp with time zone DEFAULT now() NOT NULL;
            `
        )
    }

    /** Runs on rollback */
    async down(info: Info): Promise<void> {
        await this.client.queryArray(
            `ALTER TABLE users 
                DROP email, 
                DROP age, 
                DROP created_at, 
                DROP updated_at
            `
        )
    }
}
