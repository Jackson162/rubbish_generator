const task = {
    engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
    entrepreneur: ['貨出去，人進來，公司發大財','想個 business model','找 VC 募錢']
}
  
const phrase = ['很簡單','很容易','很快','沒多難']

const draw = (array) => {
    const index = Math.floor(Math.random() * array.length);
    console.log(index)
    return array[index]
}

const generateRubbish = (career) => {
    if (!career) return '身為一個正常人，選一個職業再送出很難?????'
    let careerInMandarin = '';
    if (career === 'engineer') {
         careerInMandarin = '工程師';
    } else if (career === 'designer') {
         careerInMandarin = '設計師';
    } else if (career === 'entrepreneur') {
         careerInMandarin = '創業家'
    }
    const action = draw(task[career]); //no task.career use task['keyName']
    const adjective = draw(phrase)
    
    return `身為一個${careerInMandarin}，${action}，${adjective}吧?`
}

module.exports = generateRubbish;
