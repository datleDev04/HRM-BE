import { Employee } from "src/employee/entities/employee.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Salary {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column({ type: "" })

    // @OneToOne(() => Employee, (employee) => employee.salary)
    // employee: Employee
}
