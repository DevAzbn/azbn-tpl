<?
// CMS Azbn.ru Публичная версия

class Portfolio
{
public $class_name='portfolio';

	function __construct()
	{
		
	}
	
	public function index(&$param)
	{
		if($_SESSION['profile']['id']) {
		
		$entity = 'projects';//$this->FE->c_s($param['req_arr']['param_1']);
		
		/*
		if($this->FE->is_num($param['req_arr']['param_2'])) {
			$uid=$this->FE->as_int($param['req_arr']['param_2']);
			$uid_str='id';
		} else {
			$uid=$this->FE->c_s($param['req_arr']['param_2']);
			$uid_str='url';
		}
		*/
		
		$param['entity']=$this->FE->DB->dbSelectFirstRow("SELECT * FROM `".$this->FE->DB->dbtables['t_entity']."` WHERE url='$entity'");
		$param['entity']['param'] = unserialize($param['entity']['param']);
		
		$table_list=$this->FE->config['mysql_prefix'].'_'.$param['entity']['url'];
		$table=$table_list.'cat';
		
		//$param['cat_id']=$this->FE->DB->dbSelectFirstRow("SELECT * FROM `".$table."` WHERE (visible='1')");
		$param['item_list']=$this->FE->DB->dbSelect("SELECT * FROM `".$table_list."` WHERE visible='1' ORDER BY rating, title");
		
		$param['mdl']['header-menu/top-submenu-ul'] = 'header-menu/' . $this->class_name;
		$param['header-menu/top-menu-ul_active'] = $this->class_name;
		
		$param['page_html']['seo']=$this->FE->CMS->getSEO(6);
		
		//$this->FE->PluginMng->event('cms:cat_id:after_select', $param);
		
		$this->FE->load(array('path'=>$this->FE->config['app_path'],'class'=>'Viewer','var'=>'Viewer'));
		$this->FE->Viewer->startofpage($param);
		$this->FE->Viewer->form('portfolio/all',$param);
		$this->FE->Viewer->endofpage($param);
		
		} else {
			$this->FE->go2('/');
		}
	}
	
	public function owner(&$param)
	{
		$entity = 'projects';//$this->FE->c_s($param['req_arr']['param_1']);
		
		if($this->FE->is_num($param['req_arr']['param_1'])) {
			$uid=$this->FE->as_int($param['req_arr']['param_1']);
			$uid_str='id';
		} else {
			$uid=$this->FE->c_s($param['req_arr']['param_1']);
			$uid_str='url';
		}
		
		$param['entity'] = $this->FE->DB->dbSelectFirstRow("SELECT * FROM `".$this->FE->DB->dbtables['t_entity']."` WHERE url='$entity'");
		$param['entity']['param'] = unserialize($param['entity']['param']);
		
		$table_list = $this->FE->config['mysql_prefix'].'_'.$param['entity']['url'];
		$table = $table_list.'cat';
		
		$param['cat_id'] = $this->FE->DB->dbSelectFirstRow("SELECT * FROM `".$table."` WHERE ($uid_str='$uid' AND visible='1')");
		
		
		$cat_arr = array();
		$param['cat_arr'] = array();
		$cat_list = $this->FE->DB->dbSelect("SELECT * FROM `".$table."` WHERE (parent='1' OR parent='2') AND (visible='1') ORDER BY parent desc, id");
		while($row = mysql_fetch_array($cat_list)) {
			$row['param'] = unserialize($row['param']);
			$param['cat_arr'][] = $row;
			$cat_arr[] = $row['id'];
		}
		mysql_data_seek($cat_list,0);
		
		$cat_arr_str = implode(',', $cat_arr);
		
		if($param['cat_id']['id'] == 1) {
			$cat_arr_str = "OR cat IN ($cat_arr_str)";
		} else {
			$cat_arr_str = 'AND 1';
		}
		
		$param['item_list'] = $this->FE->DB->dbSelect("SELECT * FROM `".$table_list."` WHERE (cat='{$param['cat_id']['id']}' $cat_arr_str) AND visible='1' ORDER BY rating, id");
		
		$param['mdl']['header-menu/top-submenu-ul'] = 'header-menu/' . $this->class_name;
		$param['header-menu/top-menu-ul_active'] = $this->class_name;
		
		$param['page_html']['seo']=$this->FE->CMS->getSEO(6);
		
		//$this->FE->PluginMng->event('cms:cat_id:after_select', $param);
		
		$this->FE->load(array('path'=>$this->FE->config['app_path'],'class'=>'Viewer','var'=>'Viewer'));
		$this->FE->Viewer->startofpage($param);
		$this->FE->Viewer->form('portfolio/owner',$param);
		$this->FE->Viewer->endofpage($param);
	}
	
	
	public function project(&$param)
	{
		$entity = 'projects';//$this->FE->c_s($param['req_arr']['param_1']);
		
		if($this->FE->is_num($param['req_arr']['param_1'])) {
			$uid=$this->FE->as_int($param['req_arr']['param_1']);
			$uid_str='id';
		} else {
			$uid=$this->FE->c_s($param['req_arr']['param_1']);
			$uid_str='url';
		}
		
		$param['entity'] = $this->FE->DB->dbSelectFirstRow("SELECT * FROM `".$this->FE->DB->dbtables['t_entity']."` WHERE url='$entity'");
		$param['entity']['param'] = unserialize($param['entity']['param']);
		
		$table_list = $this->FE->config['mysql_prefix'].'_'.$param['entity']['url'];
		$table = $table_list.'cat';
		
		
		$cat_arr = array();
		$param['cat_arr'] = array();
		$cat_list = $this->FE->DB->dbSelect("SELECT * FROM `".$table."` WHERE (parent='1' OR parent='2') AND (visible='1') ORDER BY parent desc, id");
		while($row = mysql_fetch_array($cat_list)) {
			$row['param'] = unserialize($row['param']);
			$param['cat_arr'][] = $row;
			$cat_arr[] = $row['id'];
		}
		mysql_data_seek($cat_list,0);
		
		$cat_arr_str = implode(',', $cat_arr);
		
		if($param['cat_id']['id'] == 1) {
			$cat_arr_str = "OR cat IN ($cat_arr_str)";
		} else {
			$cat_arr_str = 'AND 1';
		}
		
		$param['item_id'] = $this->FE->DB->dbSelectFirstRow("SELECT * FROM `".$table_list."` WHERE $uid_str='$uid' AND visible='1'");
		
		if($param['item_id']['id']) {
			$param['item_id']['param'] = unserialize($param['item_id']['param']);
			$param['cat_id'] = $this->FE->DB->dbSelectFirstRow("SELECT * FROM `".$table."` WHERE (id='{$param['item_id']['cat']}' AND visible='1')");
		}
		
		
		$param['mdl']['header-menu/top-submenu-ul'] = 'header-menu/' . $this->class_name;
		$param['header-menu/top-menu-ul_active'] = $this->class_name;
		
		$param['page_html']['seo']=$this->FE->CMS->getSEO(6);
		
		//$this->FE->PluginMng->event('cms:cat_id:after_select', $param);
		
		$this->FE->load(array('path'=>$this->FE->config['app_path'],'class'=>'Viewer','var'=>'Viewer'));
		$this->FE->Viewer->startofpage($param);
		$this->FE->Viewer->form('item',$param);
		$this->FE->Viewer->endofpage($param);
	}
	
}

?>