function setupAge() {
    let date_of_birth = new Date(2008, 3, 18);
    let today = new Date();

    let age = today.getFullYear() - date_of_birth.getFullYear();

    let monthDifference = today.getMonth() - date_of_birth.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < date_of_birth.getDate())
    ) {
        age--;
    }

    document.getElementById("idade").textContent = `${age} anos`;
}

export default setupAge;
