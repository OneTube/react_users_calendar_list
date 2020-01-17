export default class AllUsers {

    _usersUrl = 'https://yalantis-react-school.herokuapp.com/api/task0/users';

    async getSource() {
        const res = await fetch(this._usersUrl);

        if (!res.ok)
            throw new Error('Some error');

        return await res.json();
    };

    async getMonths() {
        return await this.getSource()
            .then((res) => {
                return res.map((index) => {
                    return new Date(index.dob).getMonth();
                });
            })
            .catch(console.log.bind(console));
    }

    async getNames() {
        return await this.getSource()
            .then((res) => {
                return res.map((index) => {
                    return [new Date(index.dob).getMonth(), `${index.firstName} ${index.lastName}`];
                });
            })
            .catch(console.log.bind(console));
    }
}