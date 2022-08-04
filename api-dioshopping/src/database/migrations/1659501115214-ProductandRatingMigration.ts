import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ProductandRatingMigration1659501115214 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "messages",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name: "message",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "rating",
                        type: "number"
                    }
                ]
            })
        )

        await queryRunner.createTable(
            new Table({
                name:"products",
                columns:[
                    {
                        name:"id_product",
                        type:"number",
                        isPrimary:true,
                        isGenerated:true
                    },
                    {
                        name:"category",
                        type:"varchar"

                    },
                    {
                        name:"fk_idcategories",
                        type:"number"
                    },
                    {
                        name:"name_product",
                        type:"varchar"
                    },
                    {
                        name:"price",
                        type:"number"
                    },
                    {
                        name:"image",
                        type:"varchar"
                    },
                    {
                        name:"id_categories",
                        type:"number"
                    },
                    {
                        name:"name_categories",
                        type:"varchar"
                    },
                    {
                        name:"selected",
                        type:"boolean"
                    }
                ]
            })
        )
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages");
        await queryRunner.dropTable("products");
    }

}
