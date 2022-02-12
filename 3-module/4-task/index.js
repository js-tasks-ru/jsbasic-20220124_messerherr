function showSalary(users, age) {
    let someUsers = users.filter(user => user.age <= age);
    let usersBalance = someUsers.map(user => user.name + ", " + user.balance);
    let showSalary = usersBalance.join("\n");
    return showSalary;
}
