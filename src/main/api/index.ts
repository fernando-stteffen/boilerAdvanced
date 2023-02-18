import '../../config/module-alias'
import { PersonController } from "@/application/controllers"
const person = new PersonController()

console.log(person.speak());
console.log(person.speak('Fernando'));