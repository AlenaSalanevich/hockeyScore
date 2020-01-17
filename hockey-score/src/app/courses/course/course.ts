import { Icourse } from '../../shared/model/course/icourse';
/**
 * Course entity class implements @Icourse interface.
 */
export class Course implements Icourse
{
    constructor(
        public id: string,
        public title: string,
        public creationDateTime: Date,
        public durationMin: number,
        public description: string
    ) { }

}
