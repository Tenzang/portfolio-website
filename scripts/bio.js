function biography() {
    const imp = `import SoftwareEngineer from ('general-assembly');`;
    const declare = `\nconst Loden = new SoftwareEngineer();`;
    const hobbies = `\nLoden.hobbies = ["Singing", "Board Games", "Tabletop Role-Playing Games"];`;
    const passions = `\nLoden.passions = ["Animal Rights", "Coding"];`;
const langs = `\nLoden.languages = ["HTML", "CSS (Cascading Style Sheets)", "Javascript", "Ruby", "SQL"];`;
    const frameworks = `\nLoden.frameworks = ["Rails", "Sinatra", "React", "Vue", "Node.js", "Express.js"];`;
    const exp = `\nexport default Loden;`;
    const comment = `\n// contact details`;
    const ending =`\nDo you wish to import module Loden?`;

    return (
        `\n`+
        imp+
        `\n`+
        declare+
        `\n`+
        hobbies+
        passions+
        langs+
        frameworks+
        `\n`+
        exp+
        `\n`+
        comment+
        ending
    );
}
