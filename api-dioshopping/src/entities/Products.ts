import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity("products")
class Products {
    @PrimaryColumn()
    readonly id_product: number;

    @Column()
    category: string;

    @Column()
    fk_idcategories: string;

    @Column()
    name_product: string;

    @Column()
    price: Number;

    @Column()
    image: string;

    @Column()
    id_categories: string;

    @Column()
    name_categories: string;

    @Column()
    selected: boolean;

    
}

export { Products }
