var jogador = 'x';
var condicaoE = 0;
function chkJogo(id) {
  var src = chkSrc(id);
  if (src == 'branco.png') {
    document.getElementById(id).src = 'img/' +jogador+ '.png';
    condicaoE++;
    if(chkVit()){
      alert('Vitoria Do jogador '+ jogador);
      location.reload();      
    }
    if(condicaoE ==9){
      alert('Fim de Jogo! Empate.');
      location.reload();
    }
    if (jogador == 'x') {
      jogador = 'o';
      document.getElementById(id="cell0").src = 'img/' +jogador+ '.png';
    } else {
      jogador = 'x';
      document.getElementById(id="cell0").src = 'img/' +jogador+ '.png';
    }
  } 
}
function chkSrc(id) {
  var src = document.getElementById(id).src;
  return src.substring(src.length -10, src.length);
}
function chkVit(){
  if((chkSrc('cell1') == chkSrc('cell2')) && (chkSrc('cell1') == chkSrc('cell3')) && (chkSrc('cell1') != 'branco.png')){
    return true;
  }
  if((chkSrc('cell4') == chkSrc('cell5')) && (chkSrc('cell4') == chkSrc('cell6')) && (chkSrc('cell4') != 'branco.png')){
    return true;
  }
  if((chkSrc('cell7') == chkSrc('cell8')) && (chkSrc('cell7') == chkSrc('cell9')) && (chkSrc('cell7') != 'branco.png')){
    return true;
  }
  if((chkSrc('cell1') == chkSrc('cell4')) && (chkSrc('cell1') == chkSrc('cell7')) && (chkSrc('cell1') != 'branco.png')){
    return true;
  }
  if((chkSrc('cell2') == chkSrc('cell5')) && (chkSrc('cell2') == chkSrc('cell8')) && (chkSrc('cell2') != 'branco.png')){
    return true;
  }  
  if((chkSrc('cell3') == chkSrc('cell6')) && (chkSrc('cell3') == chkSrc('cell9')) && (chkSrc('cell3') != 'branco.png')){
    return true;
  }
  if((chkSrc('cell1') == chkSrc('cell5')) && (chkSrc('cell1') == chkSrc('cell9')) && (chkSrc('cell1') != 'branco.png')){
    return true;
  }
  if((chkSrc('cell7') == chkSrc('cell5')) && (chkSrc('cell7') == chkSrc('cell3')) && (chkSrc('cell7') != 'branco.png')){
    return true;
  }
  return false;
}