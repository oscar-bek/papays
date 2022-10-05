class Definer {
    /**general errors*/
    static general_err1 = "att:something went wrong!";
    static general_err2 = "att: there is no data with that params!";
    static general_err3 = "att: file upload arror!";
    /** member auth related */
    static auth_err1 = "att: mongodb validation is failed!";
    static auth_err3 = "no member with that mb_nick!";
    static auth_err4 = "your credentials do not match!";
     /** product auth related */
     static product_err1 = "att: product creation is failed!";
}

module.exports = Definer;