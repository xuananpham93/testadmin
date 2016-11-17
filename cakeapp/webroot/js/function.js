function confirmDelete(delUrl)
{
    if (confirm('Bạn có muốn xóa thật không?')) 
    {
            document.location = delUrl;
    }
}
function get_alias(){
    var str = (document.getElementById("idtitle").value);
    str= str.toLowerCase();
    str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a");
    str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o");
    str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str= str.replace(/đ/g,"d");
    str= str.replace(/!|@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'| |\"|\&|\#|\[|\]|~/g,"-");
    str= str.replace(/-+-/g,"-"); //thay thế 2- thành 1-
    str= str.replace(/^\-+|\-+$/g,"");//cắt bỏ ký tự - ở đầu và cuối chuỗi
    document.getElementById("idalias").value = str;
    return str;
}


function BrowseServer()
{
    var finder = new CKFinder();
    finder.basePath = 'ckfinder/';	// The path for the installation of CKFinder (default = "/ckfinder/").
    finder.selectActionFunction = SetFileField;
    finder.popup();
}

function BrowseServerMulti(i)
{
    var finder = new CKFinder();
    finder.basePath = 'ckfinder/'; // The path for the installation of CKFinder (default = "/ckfinder/").
    finder.selectActionFunction = function SetFileField(fileUrl) {
       
        $("#xFilePath"+i).val(fileUrl);
    };
    finder.popup();
} 


function file_manager(render_id)
{
    var finder = new CKFinder();
    finder.basePath = 'ckfinder/';	// The path for the installation of CKFinder (default = "/ckfinder/").
    finder.selectActionFunction = function( fileUrl ) {		
      $('#'+render_id).val(fileUrl);
  }
  finder.popup();
}


function file_manager_multi_img(render_id)
{
    var finder = new CKFinder();
    finder.basePath = 'ckfinder/';	// The path for the installation of CKFinder (default = "/ckfinder/").
    finder.selectActionFunction = function( fileUrl ) {
        var d = $('#'+render_id).val();
        d = d + ';' + fileUrl;
        $('#'+render_id).val(d);
    }
    finder.popup();
}


function SetFileField( fileUrl )
{
    document.getElementById( 'xFilePath' ).value = fileUrl;
}

jQuery(document).ready(function(){
    $("#check_all").click(function() {
      $(".check_id").attr('checked', $(this).is(':checked'));
  });
});