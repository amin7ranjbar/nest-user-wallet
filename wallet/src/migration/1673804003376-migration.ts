import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class migration1673804003376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "wallet",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isGenerated: true,
                        generationStrategy: "increment",
                        isPrimary: true
                    },
                    {
                        name: "amount",
                        type: "int",
                        default: 0
                    },
                    {
                        name: "user_id",
                        isUnique: true,
                        type: "varchar",
                    },
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
