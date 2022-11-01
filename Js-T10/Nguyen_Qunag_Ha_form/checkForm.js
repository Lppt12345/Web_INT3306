document.getElementById("hoten").focus();

document.getElementById("hoten").onblur = function () {
  this.value = ChuanhoaTen(this.value);
};

document.getElementById("hoten").onkeyup = function (e) {
  DoKeyup(e, this, "diachi");
};

document.getElementById("diachi").onkeyup = function (e) {
  DoKeyup(e, this, "nam");
};

document.getElementById("nam").onkeyup = function (e) {
  DoKeyup(e, this, "nu");
};

document.getElementById("nu").onkeyup = function (e) {
  DoKeyup(e, this, "ngaysinh");
};

document.getElementById("ngaysinh").onkeyup = function (e) {
  DoKeyup(e, this, "email");
};

document.getElementById("email").onkeyup = function (e) {
  DoKeyup(e, this, "codinh");
};

function DoKeyup(e, myself, nextcontrolid) {
  if (window.event) e = window.event; //de chay ca tren IE
  if (e.keyCode == 13) {
    document.getElementById(nextcontrolid).focus();
  }
}

function Chapnhan() {
  var okie = true;
  let name = document.getElementById("hoten").value;
  let ele = document.getElementsByName("sex");
  let sex = "";

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) sex = ele[i].value;
  }

  if (sex == "nam") {
    sex = "anh";
  } else sex = "chị";

  //xoa cac thong bao loi
  document.getElementById("loi_hoten").innerHTML = "";
  document.getElementById("loi_ngaysinh").innerHTML = "";
  document.getElementById("loi_email").innerHTML = "";
  document.getElementById("loi_username").innerHTML = "";
  document.getElementById("loi_pass").innerHTML = "";
  document.getElementById("loi_repass").innerHTML = "";

  //kiem tra cac truong bat buoc nhap
  if (document.getElementById("pass").value == "") {
    document.getElementById("loi_pass").innerHTML = "Bạn chưa nhập mật khẩu";
    document.getElementById("pass").focus();
    okie = false;
  } else if (document.getElementById("repass").value == "") {
    document.getElementById("loi_repass").innerHTML =
      "Bạn chưa gõ lại mật khẩu";
    document.getElementById("repass").focus();
    okie = false;
  } else if (
    document.getElementById("pass").value !=
    document.getElementById("repass").value
  ) {
    document.getElementById("loi_pass").innerHTML =
      "Mật khẩu và gõ lại mật khẩu không trùng nhau";
    document.getElementById("pass").focus();
    okie = false;
  }

  if (document.getElementById("username").value == "") {
    document.getElementById("loi_username").innerHTML =
      "Bạn chưa nhập tên sử dụng";
    document.getElementById("username").focus();
    okie = false;
  } else if (!laTenSD(document.getElementById("username").value)) {
    document.getElementById("loi_username").innerHTML =
      "Tên sử dụng không đúng định dạng";
    document.getElementById("username").focus();
    okie = false;
  }

  if (document.getElementById("email").value == "") {
    document.getElementById("loi_email").innerHTML = "Bạn chưa nhập e-mail";
    document.getElementById("email").focus();
    okie = false;
  } else if (!laEmail(document.getElementById("email").value)) {
    document.getElementById("loi_email").innerHTML =
      "E-mail không đúng định dạng";
    document.getElementById("email").focus();
    okie = false;
  }

  if (document.getElementById("ngaysinh").value == "") {
    document.getElementById("loi_ngaysinh").innerHTML =
      "Bạn chưa nhập ngày sinh";
    document.getElementById("ngaysinh").focus();
    okie = false;
  } else if (isNaN(document.getElementById("ngaysinh").value)) {
    document.getElementById("loi_ngaysinh").innerHTML = "Ngày sinh phải là số";
    document.getElementById("ngaysinh").focus();
    okie = false;
  } else if (parseInt(document.getElementById("ngaysinh").value) < 16) {
    document.getElementById("loi_ngaysinh").innerHTML =
      "Ngày sinh phải lớn hơn 16";
    document.getElementById("ngaysinh").focus();
    okie = false;
  }

  if (document.getElementById("hoten").value == "") {
    document.getElementById("loi_hoten").innerHTML = "Bạn chưa nhập họ tên";
    document.getElementById("hoten").focus();
    okie = false;
  }

  if (okie)
    document.getElementById(
      "Ketqua"
    ).innerHTML = `Chúc mừng ${sex} ${name} đã đăng ký công `;
}

//kiem tra s la email hay khong
function laEmail(s) {
  var re = /\S+@\S+\.\S+/

  return re.test(s);
}

//kiem tra s la ten su dung hop le hay khong
function laTenSD(s) {
	return true
  
}

//chuan hoa ten
function ChuanhoaTen(ten) {
  dname = ten;
  ss = dname.split(" ");
  dname = "";
  for (i = 0; i < ss.length; i++)
    if (ss[i].length > 0) {
      if (dname.length > 0) dname = dname + " ";
      dname = dname + ss[i].substring(0, 1).toUpperCase();
      dname = dname + ss[i].substring(1).toLowerCase();
    }
  return dname;
}
