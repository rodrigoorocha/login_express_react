import { faker } from "@faker-js/faker"

export default [

    {
        email: "rodrigo@gmail.com",
        password: "123456",
        name: faker.name.fullName(),
        avatar: faker.internet.avatar(),
        desc: faker.lorem.paragraphs()


    },

    {
        email: "elias@gmail.com",
        password: "231456",
        name: "elis",
        avatar: faker.internet.avatar(),
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"
    },

    {
        email: "maria@gmail.com",
        password: "abcdef",
        name: "Maria",
        avatar: faker.internet.avatar(),
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

    {
        email: "joao@hotmail.com",
        password: "qwerty",
        name: "João",
        avatar: faker.internet.avatar(),
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },

    {
        email: "ana@yahoo.com",
        password: "654321",
        name: "Ana",
        avatar: faker.internet.avatar(),
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }

]