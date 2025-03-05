export const questions = [
    {
      id: 0,
      question: "What is your Period Length?",
      options: [
        { label: "0", value: 0 },
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 }
      ]
    },
    {
      id: 1,
      question: "What is your Cycle Length?",
      options: [
        { label: "20-24 days", value: 0 },
        { label: "20-28 days", value: 1 },
        { label: "25-28", value: 2 },
        { label: "29-35 days", value: 3 },
        { label: "36+ days", value: 4 },
        { label: "Keeps Variating", value: 5 }
      ]
    },
    {
      id: 2,
      question: "What is your Age?",
      options: [
        { label: "18-25", value: 0 },
        { label: "26-30", value: 1 },
        { label: "31-35", value: 2 },
        { label: "36-40", value: 3 },
        { label: "40-45", value: 4 },
        { label: "Above 45", value: 5 },
        { label: "Below 18", value: 6 }
      ]
    },
    {
      id: 3,
      question: "Are you Overweight?",
      options: [
        { label: "Maybe", value: 0 },
        { label: "No", value: 1 },
        { label: "Yes", value: 2 }
      ]
    },
    {
      id: 4,
      question: "Have you experienced weight gain/loss?",
      options: [
        { label: "No", value: 0 },
        { label: "Yes", value: 1 }
      ]
    },
    {
      id: 5,
      question: "Do you have irregular or missed periods?",
      options: [
        { label: "No", value: 0 },
        { label: "Not Applicable", value: 1 },
        { label: "Yes", value: 2 }
      ]
    },
    {
      id: 6,
      question: "Do you have difficulty in conceiving?",
      options: [
        { label: "No", value: 0 },
        { label: "Not Applicable", value: 1 },
        { label: "Yes", value: 2 }
      ]
    },
    {
      id: 7,
      question: "Hair growth on Chin",
      options: [
        { label: "Excessive", value: 0 },
        { label: "Moderate", value: 1 },
        { label: "Normal", value: 2 }
      ]
    },
    {
      id: 8,
      question: "Hair growth on Cheeks",
      options: [
        { label: "Excessive", value: 0 },
        { label: "Moderate", value: 1 },
        { label: "Normal", value: 2 }
      ]
    },
    {
      id: 9,
      question: "Hair growth Between breasts",
      options: [
        { label: "Excessive", value: 0 },
        { label: "Moderate", value: 1 },
        { label: "Normal", value: 2 }
      ]
    },
    {
      id: 10,
      question: "Hair growth on Upper lips",
      options: [
        { label: "Excessive", value: 0 },
        { label: "Moderate", value: 1 },
        { label: "Normal", value: 2 }
      ]
    },
    {
      id: 11,
      question: "Hair growth in Arms",
      options: [
        { label: "Excessive", value: 0 },
        { label: "Moderate", value: 1 },
        { label: "Normal", value: 2 }
      ]
    },
    {
      id: 12,
      question: "Hair growth on Inner thighs",
      options: [
        { label: "Excessive", value: 0 },
        { label: "Moderate", value: 1 },
        { label: "Normal", value: 2 }
      ]
    },
    {
      id: 13,
      question: "Do you have Acne or skin tags?",
      options: [
        { label: "No", value: 0 },
        { label: "Yes", value: 1 }
      ]
    },
    {
      id: 14,
      question: "Do you experience Hair thinning or hair loss?",
      options: [
        { label: "No", value: 0 },
        { label: "Yes", value: 1 }
      ]
    },
    {
      id: 15,
      question: "Do you have Dark patches on your skin?",
      options: [
        { label: "No", value: 0 },
        { label: "Yes", value: 1 }
      ]
    },
    {
      id: 16,
      question: "Do you feel always tired?",
      options: [
        { label: "No", value: 0 },
        { label: "Yes", value: 1 }
      ]
    },
    {
      id: 17,
      question: "Do you experience more Mood Swings?",
      options: [
        { label: "No", value: 0 },
        { label: "Yes", value: 1 }
      ]
    },
    {
      id: 18,
      question: "How many times do you exercise per week?",
      options: Array.from({ length: 8 }, (_, i) => ({
        label: i.toString(),
        value: i
      }))
    },
    {
      id: 19,
      question: "How many times do you eat outside per week?",
      options: Array.from({ length: 8 }, (_, i) => ({
        label: i.toString(),
        value: i
      }))
    },
    {
      id: 20,
      question: "Do you often eat canned food?",
      options: [
        { label: "No", value: 0 },
        { label: "Yes", value: 1 }
      ]
    },
    {
      id: 21,
      question: "Have you relocated to a new city?",
      options: [
        { label: "No", value: 0 },
        { label: "Yes", value: 1 }
      ]
    }
  ];