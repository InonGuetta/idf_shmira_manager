export class CreateTaskDto {
  readonly content: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly userId: number;
}