
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
} from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";


@Entity("orderLines")
export class OrderLines extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;



    @CreateDateColumn({ type: "timestamp" }) 
    date_created: Date;

    @UpdateDateColumn({ type: "timestamp" })
    date_updated: Date;

    @ManyToOne(() => Product, (product) => product.orderLines, { nullable: true })
 
    product: Product;
  


    @ManyToOne(() => Order, (order) => order.orderLines, { nullable: true })
 
    order: Order;

}
