import { prisma } from '../lib/prisma.js'



async function addCourse(name, description, className, duration) {
    const course = await prisma.course.create({
        data: {
            name: name,
            description: description,
            class: className,
            duration: duration
        },
    })
    return course
}

async function getCourses() {
    const courses = await prisma.course.findMany()
    return courses
}

async function deleteCourse(id) {
    const course = await prisma.course.delete({
        where: {
            id: id
        }
    })
    return course
}

async function updateCourse(id, column, value) {
    const course = await prisma.course.update({
        where: {
            id: id
        },
        data: {
            [column]: value
        }
    })
    return course
}


main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })