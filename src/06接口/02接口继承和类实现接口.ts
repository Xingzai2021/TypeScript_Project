interface Named { name: string }
interface Identified { id: number }
interface Employee extends Named, Identified {
  department: string;
}
const e: Employee = { id: 1, name: "Alice", department: "R&D" };



interface Logger {
  log(message: string): void;
}
class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(message);
  }
}
function run(logger: Logger) {
  logger.log("Hello");
}
run(new ConsoleLogger());