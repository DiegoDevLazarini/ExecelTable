function adicionarItem(){ 
    // obter os valores digitados pelo usuario
    var nome = document.getElementById('nome').value
    var valor = document.getElementById('valor').value
    var quantidade = document.getElementById('quantidade').value
    
    if(!nome || !valor || !quantidade){
        alert('Insira todos os valores!!!')
        return
    }

    // Criar uma linha na tabela
    var tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0]
    var novalinha = tabela.insertRow(tabela.rows.length)

    var celularNome = novalinha.insertCell(0)
    var celularValor = novalinha.insertCell(1)
    var celulaQuantidade = novalinha.insertCell(2)

    // Preencher a celula com os valores
    celularNome.innerHTML = nome
    celularValor.innerHTML = valor
    celulaQuantidade.innerHTML = quantidade

    // LImpar os campos
    document.getElementById('nome').value = ''
    document.getElementById('valor').value = ''
    document.getElementById('quantidade').value = ''

}

function explorarParaExcel(){
    var tabela = Document.getElementById('tabela')
    var nomeArquivo = 'tabela_produtos.xlsx'
    var wb = XLSX.utils.table_to_book(tabela, {sheet: 'Tabela de produtos'})
    XLSX.writeFile(wb, nomeArquivo)
}