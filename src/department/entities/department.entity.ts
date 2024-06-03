import { Employee } from "src/employee/entities/employee.entity";
import { Position } from "src/position/entities/position.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar" })
    name: string;

    @Column({ type: "varchar" })
    description: string;

    @OneToMany(() => Position, (position) => position.department)
    positions: Position[];

    @OneToMany(() => Employee, (employee) => employee.department)
    employees: Employee[]
}
