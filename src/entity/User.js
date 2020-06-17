export class User {
    /**
     *
     * @param {string} displayName
     * @param {string} nickName
     * @param {string} loginName
     * @param {string} sortKey
     * @param {string} emailAddress
     * @param {string} password
     * @return {User}
     */
    constructor(
        displayName,
        nickName,
        loginName,
        sortKey,
        emailAddress,
        password = ''
    ) {
        this.displayName = displayName;
        this.nickName = nickName;
        this.loginName = loginName;
        this.sortKey = sortKey;
        this.emailAddress = emailAddress;
        this.listMailAccount = [];
        this.organizations = [];
        this.displayNameLanguage = 'en';
        this.password = password;
        this.retypePassword = password;
        this.role = Role.any;
        this.locale = '';
        this.primaryOrg = '';
        // using attr position for field 'Display Order' on web
        this.position = '';
        this.description = '';
        // using attr post for field 'Position' on web
        this.post = 'TE';
        this.telephoneNumber = '';
        this.url = '';
        this.id = '';
    }
}