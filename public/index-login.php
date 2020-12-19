<?php
    //recebendo campo do formulário para efetuar filtro
	$login=$_POST['login'];
	$senha=$_POST['senha'];

	if($login && $senha !='') {
		//estabelecendo a conexão com banco de dados
		$conexao=mysql_pconnect('sql211.epizy.com','epiz_27486279','HkOzAtaRdQSY') or die("Problema ao efetuar a conexão com banco de dados");	
		//abrindo o banco de dados que foi criado na área phpMyAdmin
		$conecta_banco=mysql_select_db('epiz_27486279_kauavitoriosite',$conexao) or die("Problema ao abrir o banco de dados");
		//executando o comando sql para listar os registros da tabela
		$comando=mysql_query("select * from tb_login where usuario_user='$login' and 	senha_user = '$senha'");
		
		if(mysql_num_rows($comando) > 0) {	// se resultou algum registro(linha)
			echo "<script language=javascript> window.alert('Login realizado com sucesso, bem vindo.');</script>";	
            include 'index.html';	
		}
		else {
			echo "<script language=javascript> window.alert('Desculpe, não encontramos uma conta com esse nome de Usuario. Tente novamente ou crie um nova conta.');</script>";
            include 'index-login.html';
		}
		//fechando o banco de dados
		$fecha_banco=mysql_close($conexao);
	}
	else {
        echo"<script language='JavaScript'>window.alert('Preencha todos os campos.');history.back();</script>";
	}

	mysqli_set_charset($conexao, "utf8");
