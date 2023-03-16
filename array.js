notaPI = 7
presenca = 60
media = 5

if (media >= 7 && presenca >= 80 && notaPI >= 7) {
    console.log("APROVADO")
} else if (media == 6 || notaPI < 7 || presenca > 70) {
    console.log("RECUPERAÇÃO")
} else if (media == 6 && presenca >= 60){
    console.log("FINAL")
} else if (media <= 5 || presenca <= 40){
    console.log("REPROVADO")
}else {
    console.log("VERIFICAR COM PROFESSOR")
}