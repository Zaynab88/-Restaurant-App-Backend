
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { Product } from "./Product";


@Entity("category")
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;



    @CreateDateColumn({ type: "timestamp" })
    date_created: Date;

    @UpdateDateColumn({ type: "timestamp" })
    date_updated: Date;

    @OneToMany(
        () => Product,
        product=> product.id
    )
    products: Product[]


}
