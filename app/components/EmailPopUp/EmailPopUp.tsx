// import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogFooter } from '../../../components/ui/dialog'
// import { Field, FieldGroup } from '../../../components/ui/field'
// import { Input } from '../../../components/ui/input'
// import { Label } from '../../../components/ui/label'
// import { Button } from '../../../components/ui/button'

// interface EmailPopUpProps {
//   open: boolean;
//   setOpen: () => void;
// }

// const EmailPopUp = ({open, setOpen}: EmailPopUpProps) => {
//     return (
//         <Dialog open={open} onOpenChange={setOpen}>
//             <form>
//                 <DialogTrigger render={<Button variant="outline">Open Dialog</Button>} />
//                 <DialogContent className="sm:max-w-sm">
//                     <DialogHeader>
//                         <DialogTitle>Edit profile</DialogTitle>
//                         <DialogDescription>
//                             Make changes to your profile here. Click save when you&apos;re
//                             done.
//                         </DialogDescription>
//                     </DialogHeader>
//                     <FieldGroup>
//                         <Field>
//                             <Label htmlFor="name-1">Name</Label>
//                             <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
//                         </Field>
//                         <Field>
//                             <Label htmlFor="username-1">Username</Label>
//                             <Input id="username-1" name="username" defaultValue="@peduarte" />
//                         </Field>
//                     </FieldGroup>
//                     <DialogFooter>
//                         <DialogClose render={<Button variant="outline">Cancel</Button>} />
//                         <Button type="submit">Save changes</Button>
//                     </DialogFooter>
//                 </DialogContent>
//             </form>
//         </Dialog>
//     )
// }

// export default EmailPopUp