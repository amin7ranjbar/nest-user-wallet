import { Gender } from "../enum";
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class migration1673804003376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isUnique: true,
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "firstname",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "lastname",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "gender",
                        type: "enum",
                        enum: [Gender.female, Gender.male],
                    }
                ],
            }),
            true,
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
