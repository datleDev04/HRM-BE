import { Department } from "src/department/entities/department.entity";
import { Position } from "src/position/entities/position.entity";
import { Salary } from "src/salary/entities/salary.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";


export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHERS = "OTHERS"
}
export enum Role {
    EMPLOYEE = "EMPLOYEE",
    ADMIN = "ADMIN",
}
export enum Status {
    WORKING = "WORKING",
    QUITED = "QUITED",
}

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar" })
    user_name: string;

    @Column({ type: "varchar" })
    email: string;

    @Column({ type: "varchar" })
    password: string;

    @Column({ type: "varchar" })
    avatar: string;

    @Column({ type: "varchar" })
    address: string;

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.OTHERS
    })
    gender: Gender;

    @Column("date")
    birthOfDate: Date;

    @Column({ type: "varchar" })
    phone: Date;

    @Column({
        type: "enum",
        enum: Status,
        default: Status.WORKING
    })
    status: Status;

    @Column({
        type: "enum",
        enum: Role,
        default: Role.EMPLOYEE
    })
    role: Role;

    // @OneToOne(() => Salary, (salary) => salary.employee)
    // salary: Salary


    @ManyToOne(() => Department, (department) => department.employees)
    department: Department

    @OneToOne(() => Position, (position) => position.employee)
    position: Department
}
