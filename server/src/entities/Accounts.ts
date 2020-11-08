import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { AccountType } from '../graphql/schema.types'
import { User } from './User'

@Entity()
export class Account extends BaseEntity /*implements GraphqlAccount*/ {
  @PrimaryGeneratedColumn()
  accountId: number

  @CreateDateColumn()
  timeCreated: Date

  @UpdateDateColumn()
  timeUpdated: Date

  @Column({
    length: 100,
  })
  country: string

  @Column({
    type: 'enum',
    enum: AccountType,
  })
  type: AccountType

  @Column()
  balance: number

  @Column({
    nullable: true,
  })
  name: string

  @ManyToOne(() => User, user => user.account)
  user: User
}
