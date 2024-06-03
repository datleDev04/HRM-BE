import { Department } from "src/department/entities/department.entity";
import { Employee } from "src/employee/entities/employee.entity";
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Position {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar" })
    name: string;

    @Column({ type: "varchar" })
    description: string;

    @ManyToOne(() => Department, (department) => department.positions)
    department: Department

    @OneToOne(() => Employee, (employee) => employee.position)
    employee: Employee
}
