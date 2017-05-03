import grep from './Grep';

const baoJia = (pop,min,max,a,b,c) =>{

  let sam =0;//大
  let sbm =0;//中
  let scm =0;//小

  const xiao= grep(pop,function(value){
      return value <  min ;
  });

  for (var i in xiao){
    scm += parseInt(xiao[i])
  }

   //小
  const zhong= grep(pop,function(value){
      return value >=min && value<= max;

  });
  for (var i in zhong){
    sbm += parseInt(zhong[i])
  }//中

  const da= grep(pop,function(value){
      return value >max;

  });
  for (var i in da){
    sam += parseInt(da[i])
  }
   //大

      // console.log(sam*a + sbm*b + scm*c,sam,sbm,scm)
    return (sam*a + sbm*b + scm*c)


  }
export default baoJia;
