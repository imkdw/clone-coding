function validAccount(type: string, data: string) {
  switch (type) {
    case "userId":
      const lowerCaseRegex = /[a-z]/g;
      const lowerCaseCondition = data.match(lowerCaseRegex);
      const lenghtCondition = data.length < 13;

      if (!lowerCaseCondition) {
        return false;
      }

      if (!lenghtCondition) {
        return false;
      }
  }
}

export default validAccount;
