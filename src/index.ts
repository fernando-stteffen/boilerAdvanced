class Person {
  speak(name?: string): string {
    return `Hello ${name?.toUpperCase() ?? 'Stranger'}!!!`
  }
}

const person = new Person()

person.speak()
person.speak('Fernando')