import Modal from "@/components/modal";
import TextField from "@/components/text-field";
import useDataset from "@/store/use-dataset";
import { Button, HStack, VStack } from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { BsPlusLg } from "react-icons/bs";

type AddDataModalProps = {
  open: boolean;
  onClose: () => void;
};

const AddDataModal = (props: AddDataModalProps) => {
  const pushData = useDataset((store) => store.push);
  const { control, handleSubmit, getValues } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      competition: "",
      academic: "",
      skill: "",
      absence: "",
      organization: "",
    },
  });

  const submit = () => {
    const body = getValues();
    pushData({
      name: body.name,
      competition: +body.competition,
      academic: +body.academic,
      skill: +body.skill,
      absence: +body.absence,
      organization: +body.organization,
    });
    props.onClose();
  };

  const close = () => {
    props.onClose();
  };

  return (
    <Modal
      title="Add Data"
      open={props.open}
      onClose={close}
      buttons={
        <>
          <Button onClick={close}>Close</Button>
          <Button
            colorScheme="blue"
            leftIcon={<BsPlusLg />}
            onClick={handleSubmit(submit)}
          >
            Add
          </Button>
        </>
      }
    >
      <VStack as="form" spacing="4" alignItems="unset">
        <TextField
          control={control}
          name="name"
          label="name"
          rules={{ required: true }}
        />
        <HStack spacing="4">
          <VStack spacing="4" alignItems="unset">
            <TextField
              control={control}
              name="competition"
              label="competition"
              type="number"
              rules={{ required: true }}
            />
            <TextField
              control={control}
              name="academic"
              label="academic"
              type="number"
              rules={{ required: true }}
            />
          </VStack>
          <VStack spacing="4" alignItems="unset">
            <TextField
              control={control}
              name="skill"
              label="skill"
              type="number"
              rules={{ required: true }}
            />
            <TextField
              control={control}
              name="absence"
              label="absence"
              type="number"
              rules={{ required: true }}
            />
          </VStack>
          <VStack spacing="4" alignItems="unset">
            <TextField
              control={control}
              name="organization"
              label="organization"
              type="number"
              rules={{ required: true }}
            />
          </VStack>
        </HStack>
      </VStack>
    </Modal>
  );
};

export default AddDataModal;
