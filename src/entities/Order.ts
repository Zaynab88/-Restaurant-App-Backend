
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    Generated,
  } from "typeorm";
import { OrderLines } from "./OrderLines";
  
  @Entity("order")
  export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column()
    mobileNum: number;
  
    @Column()
    city: string;
    @Column()
    address: string;


    @Column()
    @Generated("uuid")
    orderNumber: string;
    @CreateDateColumn({ type: "timestamp" })
    date_created: Date;
  
    @UpdateDateColumn({ type: "timestamp" })
    date_updated: Date;
  
    @OneToMany(
      () => OrderLines,
      orderLines=> orderLines.order
  )
  orderLines: OrderLines[]
  
  
  }

