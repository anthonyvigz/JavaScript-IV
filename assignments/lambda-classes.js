// CODE here for your Lambda Classes

class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}!`;
    }
}

class Instructor extends Person {
    constructor(attr) {
        super(attr);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(string) {
        return `Today we are learning about ${string}`;
    }
    grade(student, subject) {
        return `${student.name} receivas a perfect score on ${subject}!`; 
    }
}

class Student extends Person {
    constructor(attr) {
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listSubjects(this.favSubjects) {
        this.favSubjects.forEach(subject => {
            console.log(subject);
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManager extends Instructor {
    constructor(attr) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slack.channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const john = new Instructor({
    name: 'John',
    location: 'Boston',
    age: 30,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-End',
    catchPhrase: `Don't forget all the homies.`
})

const mike = new Instructor({
    name: 'Michael',
    location: 'Chicago',
    age: 20,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-End',
    catchPhrase: `Get back here!`
})

const anthony = new Student({
    name: 'Anthony',
    location: 'Boston',
    age: 26,
    gender: 'male',
    previousBackground: 'college',
    className: 'WebPT6',
    favSubjects: ['Class constructors', 'HTML', 'CSS'];
})

const lily = new Student({
    name: 'Lily',
    location: 'Boston',
    age: 26,
    gender: 'female',
    previousBackground: 'college',
    className: 'WebPT6',
    favSubjects: ['inheritance', 'arrays', 'CSS'];
})