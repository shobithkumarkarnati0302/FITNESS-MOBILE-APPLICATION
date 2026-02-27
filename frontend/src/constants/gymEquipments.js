const gymEquipments = [
  {
    id: 1,
    name: 'Treadmill',
    description:
      'Cardio machine used for walking, jogging, or running indoors.',
    image:
      'https://images.unsplash.com/photo-1721394749382-223a18ce8bb9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Stationary Bike',
    description: 'Indoor cycling machine for cardiovascular workouts.',
    image:
      'https://images.unsplash.com/photo-1707985287164-c84627ad6eba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Elliptical Trainer',
    description: 'Low-impact cardio machine that simulates walking or running.',
    image:
      'https://t3.ftcdn.net/jpg/04/15/75/28/360_F_415752836_V9vSiFaTjd23ttbRGOvaI64Yfj97WN4r.jpg',
  },
  {
    id: 4,
    name: 'Rowing Machine',
    description: 'Full-body cardio machine that simulates rowing motion.',
    image:
      'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Dumbbells',
    description: 'Free weights used for strength training exercises.',
    image:
      'https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Barbell',
    description: 'Long bar used with weight plates for compound exercises.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    name: 'Weight Plates',
    description: 'Circular weights attached to barbells and machines.',
    image:
      'https://images.unsplash.com/photo-1689514226761-336eaf77e311?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    name: 'Kettlebell',
    description:
      'Cast iron weight used for dynamic strength training exercises.',
    image:
      'https://images.unsplash.com/photo-1632077804406-188472f1a810?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    name: 'Smith Machine',
    description:
      'Barbell machine with fixed vertical movement for safer lifting.',
    image:
      'https://trainingstation.co.uk/cdn/shop/articles/img-1725177255504_d5cb836e-6420-4322-9401-29a47440c155_1600x.jpg?v=1742047782',
  },
  {
    id: 10,
    name: 'Leg Press Machine',
    description:
      'Machine used to strengthen quadriceps, hamstrings, and glutes.',
    image:
      'https://media.istockphoto.com/id/1314422476/photo/athlete-performs-leg-exercise-athletic-woman-in-the-sportswear-doing-a-fitness-workout.jpg?s=612x612&w=0&k=20&c=gTE-y5Xqu-GMmF-w1DCk18MKReykR-S4Kjo2hpohh4g=',
  },
  {
    id: 11,
    name: 'Chest Press Machine',
    description: 'Machine that targets chest, shoulders, and triceps.',
    image:
      'https://plus.unsplash.com/premium_photo-1663134063649-50da2c755efa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 12,
    name: 'Lat Pulldown Machine',
    description: 'Machine used to target the latissimus dorsi muscles.',
    image:
      'https://media.istockphoto.com/id/2018389815/photo/athletic-healthy-strong-muscular-man-sits-on-the-simulator-and-shakes-his-back-muscles-in-the.jpg?s=612x612&w=0&k=20&c=_FDkAyYwexxWcPjMjioFRFYxm3Rbz46ZbfqQCO7UxGg=',
  },
  {
    id: 13,
    name: 'Cable Machine',
    description:
      'Versatile machine for strength training with adjustable pulleys.',
    image:
      'https://media.istockphoto.com/id/2186936234/photo/side-view-of-strong-bodybuilder-doing-strength-workouts-with-effort-on-cable-machine.jpg?s=612x612&w=0&k=20&c=xr5ujEAgr4r27DAmVKjkt2gCDvGUXYi2G3w3KaFtu-0=',
  },
  {
    id: 14,
    name: 'Bench Press',
    description: 'Flat bench used for barbell or dumbbell pressing exercises.',
    image:
      'https://media.istockphoto.com/id/1028273740/photo/man-during-bench-press-exercise.jpg?s=612x612&w=0&k=20&c=pTNDqP6UbgTm39u9GHFqDiH13o1cm1l4xYHBdoiSdkg=',
  },
  {
    id: 15,
    name: 'Adjustable Bench',
    description: 'Bench that can be adjusted to incline or decline positions.',
    image:
      'https://media.istockphoto.com/id/2242100895/photo/fitness-gym-weightlifting-bench-press-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=WO5g3dVZep7WH8AiGXLW23fFXOO_3UVpkd0-2CtOQvU=',
  },
  {
    id: 16,
    name: 'Squat Rack',
    description: 'Support structure for performing squats and heavy lifts.',
    image:
      'https://media.istockphoto.com/id/1338185944/photo/a-fit-asian-man-performs-some-squats-at-the-smith-machine-working-out-leg-day-training-at-the.jpg?s=612x612&w=0&k=20&c=WsxJ8ouWlze38ycqAAAaW5_0PMJXkFyI2j6Mmn5bOk0=',
  },
  {
    id: 17,
    name: 'Pull-Up Bar',
    description:
      'Bar used for upper body exercises like pull-ups and chin-ups.',
    image:
      'https://media.istockphoto.com/id/855620696/photo/cross-training.jpg?s=612x612&w=0&k=20&c=p5HXLWIiX5AN-kxBVW6B_6MkTKadG2VvFNDJymIyOsU=',
  },
  {
    id: 18,
    name: 'Leg Curl Machine',
    description: 'Machine that isolates and strengthens the hamstrings.',
    image:
      'https://media.istockphoto.com/id/1152647089/photo/close-up-of-man-lifting-weight-by-two-legs-for-stretching-muscle-at-fitness-gym-at-private.jpg?s=612x612&w=0&k=20&c=XMhwtY8jG-JNGTVG2Vm4PDhYJ_o4iTwvxAYPKwxsfmg=',
  },
  {
    id: 19,
    name: 'Leg Extension Machine',
    description: 'Machine targeting quadriceps muscles.',
    image:
      'https://media.istockphoto.com/id/1089355254/photo/athletic-muscular-bearded-exercising-man-at-the-modern-sport-gym-fitness-sport-training.jpg?s=612x612&w=0&k=20&c=f-Or_ObYCiQyCDOHOQL6OpmJIohp8tcdERLi3WOMf4g=',
  },
  {
    id: 20,
    name: 'Preacher Curl Bench',
    description: 'Bench designed for isolated bicep curls.',
    image:
      'https://media.istockphoto.com/id/513435192/photo/good-looking-man-working-on-his-biceps.jpg?s=612x612&w=0&k=20&c=grx8r0Smepug9w3x3R6HiyEe2QlU_dRZggSYdfiTzcs=',
  },
  {
    id: 21,
    name: 'Seated Row Machine',
    description: 'Machine that strengthens the back and biceps.',
    image:
      'https://media.istockphoto.com/id/940555120/photo/woman-doing-cardio-workout-on-rowing-machine.jpg?s=612x612&w=0&k=20&c=zJp6DyD7NQsDxInNic2o6RRhIgxd4ESckC9ZVFIKP64=',
  },
  {
    id: 22,
    name: 'Hack Squat Machine',
    description:
      'Machine that targets lower body muscles with guided movement.',
    image:
      'https://media.istockphoto.com/id/1429386066/photo/man-doing-quadriceps-exercise-on-hack-squat-machine-at-gym.jpg?s=612x612&w=0&k=20&c=o7d0O2DVHTJ-whU_b7nZTa6zStNv5OEvL7l7IEbxTEo=',
  },
  {
    id: 23,
    name: 'Hip Thrust Machine',
    description: 'Machine used to strengthen glute muscles.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6VDMPak5bSsOFNtxxAGOBfUAcZHQZLgKbQ&s',
  },
  {
    id: 24,
    name: 'Battle Ropes',
    description: 'Heavy ropes used for strength and cardio conditioning.',
    image:
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmF0dGxlJTIwUm9wZXN8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 25,
    name: 'Medicine Ball',
    description: 'Weighted ball used for strength and explosive exercises.',
    image:
      'https://media.istockphoto.com/id/1133296214/photo/gym-slam-balls.jpg?s=2048x2048&w=is&k=20&c=C9H2RSH2_0FkYC4mhjvqvA4LPqMRZsBZJ56aa-zSHYc=',
  },
  {
    id: 26,
    name: 'Resistance Bands',
    description: 'Elastic bands used for resistance training.',
    image:
      'https://plus.unsplash.com/premium_photo-1672280853233-7d87cd9ea152?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFJlc2lzdGFuY2UlMjBCYW5kc3xlbnwwfHwwfHx8MA%3D%3Dhttps://source.unsplash.com/600x400/?resistance-bands,gym',
  },
  {
    id: 27,
    name: 'Foam Roller',
    description: 'Used for muscle recovery and myofascial release.',
    image:
      'https://plus.unsplash.com/premium_photo-1661923103649-0223557b8589?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rm9hbSUyMFJvbGxlcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 28,
    name: 'Stepper Machine',
    description: 'Cardio machine that simulates stair climbing.',
    image:
      'https://media.istockphoto.com/id/1031912958/photo/women-working-out-on-stepper-exercise-machine.jpg?s=612x612&w=0&k=20&c=EczjpOVxkkPvNkzmWJYShjHKzPVxrb1KmcFPZPTEJIQ=',
  },
  {
    id: 29,
    name: 'Stair Climber',
    description: 'Machine that mimics climbing stairs for cardio workouts.',
    image:
      'https://media.istockphoto.com/id/1347903665/photo/modern-gym-interior-with-new-fitness-equipment.jpg?s=612x612&w=0&k=20&c=bar_oOg3Cb-zWAoWzAN1mbJtzKjLllU7F8SggwtR31I=',
  },
  {
    id: 30,
    name: 'Ab Crunch Machine',
    description: 'Machine designed to isolate abdominal muscles.',
    image:
      'https://media.istockphoto.com/id/2192617242/photo/athletic-man-using-a-fitness-machine-for-intense-chest-exercises-at-a-gym.jpg?s=612x612&w=0&k=20&c=189J_hyBT3K7IKbQ_Gn6vcUYnOGaBCnWucjbO3ok1JM=',
  },
  {
    id: 31,
    name: 'Power Tower',
    description: 'Multi-functional station for pull-ups, dips, and leg raises.',
    image:
      'https://media.istockphoto.com/id/1049740142/photo/weights-training-equipment.jpg?s=612x612&w=0&k=20&c=Xo6ALVeCDcydjUvJTL3zc6gU5NZ431e-abEzkvW61kQ=',
  },
  {
    id: 32,
    name: 'Trap Bar',
    description: 'Hexagonal barbell used mainly for deadlifts.',
    image:
      'https://media.istockphoto.com/id/2247576827/photo/woman-lifting-a-trap-bar-in-gym-building-strength-during-intense-workout.jpg?s=612x612&w=0&k=20&c=szf3pSmqoJ7btSTX6hPdQgtQ7GnF5nJ-HRrUSyWwVHw=',
  },
  {
    id: 33,
    name: 'EZ Curl Bar',
    description: 'Curved barbell designed for comfortable bicep curls.',
    image:
      'https://media.istockphoto.com/id/1338889817/photo/a-fit-asian-guy-does-upright-rows-with-an-ez-curl-bar-at-an-open-air-gym-traps-upper-back-and.jpg?s=612x612&w=0&k=20&c=lGuFplqlcBSfUo4zW-ECwNUZ5SG0YJVFCVZKXQ1_rzw=',
  },
  {
    id: 34,
    name: 'Glute Bridge Bench',
    description: 'Bench designed specifically for glute bridge exercises.',
    image:
      'https://plus.unsplash.com/premium_photo-1666738345836-8045d12650e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2x1dGUlMjBCcmlkZ2UlMjBCZW5jaHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 35,
    name: 'Sled Push Machine',
    description: 'Weighted sled used for strength and conditioning training.',
    image:
      'https://media.istockphoto.com/id/1144982417/photo/getting-fit-at-the-gym.jpg?s=612x612&w=0&k=20&c=B5wmGTIuBk6Ji55BOAWc0c8vcr0lidONJWxpQgDB-7c=',
  },
];

export default gymEquipments;
