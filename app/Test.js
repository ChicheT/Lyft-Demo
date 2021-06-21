export default class Test {
  
  constructor() {}

  async cutString(body) {
    try{
      const targetKey="string_to_cut";
      
      if(!Object.prototype.hasOwnProperty.call(body, targetKey)){
        return {
          code: 400,
          data: { error: "There is no key string_to_cut" }
        };
      }

      let targetStr=body[targetKey];
      let res="";
      let i=2;
      while(i<targetStr.length){
        res+=targetStr[i];
        i+=3;
      }

      return {
        code: 200,
        data: { return_string: res },
      };

    } catch (e) {
      return ({
        code: 500,
        data: { error: e }
      });
    }
  }
}

  





