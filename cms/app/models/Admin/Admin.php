<?php

/**
 * 多级路径model测试
 */
class Admin_AdminModel extends BaseModel
{

    protected static $_instance = null;

    protected static $_table = 'admin';

    public function __construct()
    {
        $db_conf = RThink_Config::get('db.default');

        parent::__construct($db_conf);
    }

    public static function instance()
    {
        if (null == self::$_instance) {
            self::$_instance = new self();
        }

        self::$_instance->selectTable(self::$_table);

        return self::$_instance;
    }


}