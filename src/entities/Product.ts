
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Category } from "./Category";
import { OrderLines } from "./OrderLines";

@Entity("product")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  popular: boolean;

  @CreateDateColumn({ type: "timestamp" })
  date_created: Date;

  @UpdateDateColumn({ type: "timestamp" })
  date_updated: Date;


  @ManyToOne(() => Category, (category) => category.products, { nullable: false })
 
  category: Category;

  
  @OneToMany(
    () => OrderLines,
    orderLines=> orderLines.id
)
orderLines: OrderLines[]

}
