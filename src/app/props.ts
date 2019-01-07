export class Props {

    static EMAIL_PATTERN: string = '^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$';
    static NAME :string = '^([A-Za-z0-9&.,-]+ )+[A-Za-z0-9&.,-]+$|^[A-Za-z0-9&.,-]+$';
    static DESCRIPTION :string = '^([A-Za-z0-9!@#$%^&*()_+=`~\\][{}|\'\"-;:/.,?><]+ )+[A-Za-z0-9!@#$%^&*()_+=`~\\][{}|\'\"-;:/.,?><]+$|^[A-Za-z0-9!@#$%^&*()_+=`~\\][{}|\'\"-;:/.,?><]+$';
   

}
export class account_validation_messages  {
    title: any =[
      { type: 'required', message: 'Title is required' },
      { type: 'minlength', message: 'Title must be at least 8 characters long' },
      { type: 'pattern', message: 'Please Enter a Valid Title' },
    ];
    email: any=[
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ];
   
    description: any =[
        { type: 'required', message: 'Description is required' },
        { type: 'minlength', message: 'Description must be at least 20 characters long' },
        { type: 'pattern', message: 'Please Enter a Valid Description' },
      ];
    }
