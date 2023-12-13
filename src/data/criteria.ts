enum attribute {
    COST,
    BENEFIT,
  }
  
  const criteriaWP = [
    {
      criteria: "competition",
      attribute: attribute.BENEFIT,
      weight: 2,
    },
    {
      criteria: "academic",
      attribute: attribute.BENEFIT,
      weight: 3,
    },
    {
      criteria: "skill",
      attribute: attribute.BENEFIT,
      weight: 4,
    },
    {
      criteria: "absence",
      attribute: attribute.BENEFIT,
      weight: 3,
    },
    {
      criteria: "organization",
      attribute: attribute.BENEFIT,
      weight: 3,
    },
  
  ];
  
  const criteriaSAW = {};
  
  export { criteriaWP, criteriaSAW, attribute };
  